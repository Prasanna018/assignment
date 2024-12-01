from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost:3000",  # React local development server
     # Production frontend URL
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,  # Allow cookies to be sent with requests
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class Edge(BaseModel):
    from_node: str
    to_node: str

class Workflow(BaseModel):
    nodes: list[str]
    edges: list[Edge]

def is_dag(nodes, edges):
    # Build adjacency list representation of the graph
    graph = {node: [] for node in nodes}
    for edge in edges:
        graph[edge.from_node].append(edge.to_node)

    # Use depth-first search to detect cycles
    visited = set()
    stack = set()

    def visit(node):
        if node in stack:  # Cycle detected
            return False
        if node in visited:  # Already processed
            return True
        stack.add(node)
        for neighbor in graph[node]:
            if not visit(neighbor):
                return False
        stack.remove(node)
        visited.add(node)
        return True

    # Check all nodes
    return all(visit(node) for node in nodes)

@app.post('/pipelines/parse')
async def parse_pipeline(workflow: Workflow):
    nodes = workflow.nodes
    edges = workflow.edges

    # Calculate node and edge counts
    num_nodes = len(nodes)
    num_edges = len(edges)

    # Validate DAG
    is_dag_result = is_dag(nodes, edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag_result
    }
