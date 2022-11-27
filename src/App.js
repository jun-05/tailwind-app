import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Toggle from "./components/Toggle";
import tw from "tailwind-styled-components";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkmode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    //Darkmode Wrapper
    <DarkModeWrapper dark={isDark}>
      {/* 레이아웃 wrapper */}
      <Wrapper>
        <header className="relative text-center h-12 border-b shadow-lg dark:text-white">
          <div>Header</div>
          <div className="flex absolute top-0 right-4">
            <Toggle toggleFn={toggleDarkmode} />
          </div>
        </header>
        {/* 레이아웃 wrapper */}
        <div className="flex-grow">
          <main className="grid grid-cols-1  md:grid-cols-3 2xl:grid-cols-4 p-4 gap-2 gap-y-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </main>
        </div>
        <footer className="text-center h-12 border-t shadow-inner dark:text-white">
          Footer
        </footer>
      </Wrapper>
    </DarkModeWrapper>
  );
}

const Wrapper = tw.div`
flex 
flex-col 
min-h-screen 
h-full 
w-screen 
min-w-full 
dark:bg-slate-800 
overflow-x-hidden
`;

const DarkModeWrapper = tw.div`
${(p) => (p.dark ? "dark" : "")}
`;

export default App;
