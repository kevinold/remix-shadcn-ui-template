import { Button } from '@/components/ui/button';
import { Link } from '@remix-run/react';
import { Briefcase, LogOut } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export const Header = () => {
  return (
    <header className="flex flex-nowrap justify-between w-full p-2 sticky top-0 backdrop-blur-md bg-white/50 dark:bg-slate-800/50">
      <div className="mr-4 hidden md:flex px-4">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Briefcase className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            Titles and Pages
          </span>
        </Link>
      </div>
      <div className="inline-flex justify-center items-center align-middle">
        <Button
          variant="outline"
          size="icon"
          className="w-auto px-2 mx-2"
          asChild>
          <a
            className="inline-flex align-middle items-center text-sm"
            href="https://github.com/abdulkader/remix-shadcn-ui-dark-theme-demo"
            target="__blank">
            <LogOut />
            <span className="px-2 inline-flex">Logout</span>
          </a>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
};
