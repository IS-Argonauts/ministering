import { useState } from "react";
import IdeaGeneratorPage from "../components/idea_generator/IdeaGeneratorPage";
import NavBar from "../NavBar";

export default function IdeaGenerator() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      <IdeaGeneratorPage />
    </div>
  );
}
