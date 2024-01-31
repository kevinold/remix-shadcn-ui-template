import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@remix-run/react';

export default function TitleForm() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      {/* <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">New Title</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter a title</p>
      </div> */}
      <Form method="post" className="space-y-4">
        <div className="space-y-2">
          {/* <Label htmlFor="title">Title</Label> */}
          <Input id="title" name="title" placeholder="Enter a title" required />
        </div>
        <Button className="w-full" type="submit">
          Add Title
        </Button>
      </Form>
    </div>
  );
}
