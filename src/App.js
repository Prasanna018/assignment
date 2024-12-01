import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster></Toaster>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
