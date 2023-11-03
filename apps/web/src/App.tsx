import { useState } from "react";
import FormCreateDevContainerConfig from "./components/FormCreateDevContainerConfig";
import InputCmdCopy from "./components/InputCmdCopy";
import Logo from "./components/Logo";
import { CreateDevContainerConfigDto } from "@inizio/cli/src/types/devContainerConfig";
import { images } from "@inizio/cli/src/assets/list-images";

function App() {
  const [configDevContainer, setConfigDevContainer] =
    useState<CreateDevContainerConfigDto>({
      listServices: [],
      devContainerImage: images[0].name,
    });

  return (
    <div className="font-font">
      <Logo />
      <div className="text-center text-2xl">
        A tool for generate devcontainer config for your project.
      </div>
      <InputCmdCopy configDevContainer={configDevContainer} />
      <FormCreateDevContainerConfig
        configDevContainer={configDevContainer}
        setConfigDevContainer={setConfigDevContainer}
      />
      {/* // TODO: move to a footer componets
      <div className="m-auto w-1/3">
        <div>If you want to contribute, please visit the github</div>
        <img className="m-auto w-10" src="github.svg" alt="github" />
      </div> */}
    </div>
  );
}

export default App;
