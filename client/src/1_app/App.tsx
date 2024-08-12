import { ThemeProvider } from '@/4_widgets/ThemeProvider'
import '../5_shared/index.css'
import Router from './Router'
import { ModeToggle } from '@/4_widgets/ToggleTheme'
import images from '@/5_shared/images'
import { useState } from 'react'

type Theme = "dark" | "light" | "system"

function App() {
  const storageKey = 'vite-ui-theme';
  const defaultTheme = 'dark';

  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )
  
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme' theme={theme} setTheme={setTheme}>
      <div className='w-screen h-screen'>
        <div className='w-screen flex justify-between mt-2'>
          <div className='ml-3'>
            <ModeToggle/>
          </div>
          
          <a className="flex items-center mr-4" href="https://github.com/SnippetSH/OmokAI.git">
            <img src={images.github} width={'40px'} className="rounded-full mx-3" />
            <h1 className={`text-2xl pt-1 text-center superfont ${theme === 'dark' ? 'text-white' : 'text-indigo-950'}`}> SnippetSH.io </h1>
          </a>
        </div>
        <Router></Router>
      </div>
    </ThemeProvider>
  )
}

export default App
