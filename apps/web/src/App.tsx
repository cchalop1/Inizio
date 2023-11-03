import { useState } from "react";
import FormCreateDevContainerConfig from "./components/FormCreateDevContainerConfig";
import InputCmdCopy from "./components/InputCmdCopy";
import Logo from "./components/Logo";
import { CreateDevContainerConfigDto } from "@cchalop1/inizio/src/types/devContainerConfig";
import { images } from "@cchalop1/inizio/src/assets/list-images";

function App() {
  const [configDevContainer, setConfigDevContainer] =
    useState<CreateDevContainerConfigDto>({
      listServices: [],
      devContainerImage: images[0].name,
    });

  return (
    <div className="font-font flex justify-between h-screen flex-col">
      <div>
        <Logo />
        <div className="text-center text-2xl">
          A tool for generate devcontainer config for your project.
        </div>
        <InputCmdCopy configDevContainer={configDevContainer} />
        <FormCreateDevContainerConfig
          configDevContainer={configDevContainer}
          setConfigDevContainer={setConfigDevContainer}
        />
      </div>
      <div className="m-auto w-1/3">
        <div className="text-center">
          If you want to contribute, please visit the github
        </div>
        <a href="https://github.com/cchalop1/inizio" target="_blank">
          <img className="m-auto w-10" src="github.svg" alt="github" />
        </a>
      </div>
    </div>
  );
}

export default App;
