import { useState } from "react";
import Giscus, { Theme } from "@giscus/react";

export default function Comments() {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "noborder_light"
  );

  window.addEventListener("storage", () => {
    setTheme((localStorage.getItem("theme") as Theme) || "noborder_light");
  });

  const translateTheme: Theme =
    theme === "dark" ? "transparent_dark" : "noborder_light";

  return (
    <div aria-label="Comment Section">
      <Giscus
        repo="danielmarques12/comments-blog.danielmarques.dev"
        repoId="R_kgDOKMrsAA"
        category="Comments"
        categoryId="DIC_kwDOKMrsAM4CY7zW"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={translateTheme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
