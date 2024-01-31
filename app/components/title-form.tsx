import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function TitleForm() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      {/* <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">New Title</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter a title</p>
      </div> */}
      <div className="space-y-4">
        <div className="space-y-2">
          {/* <Label htmlFor="title">Title</Label> */}
          <Input id="title" placeholder="Enter a title" required />
        </div>
        <Button className="w-full" type="submit">
          Add Title
        </Button>
      </div>
    </div>
  );
}
