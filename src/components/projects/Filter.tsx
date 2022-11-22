import type { ProjectWithTechnologies } from "types";
import type { projectType } from "@prisma/client";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// Fonts
import GOTHAM_MEDIUM from "fonts/GOTHAM_MEDIUM";
import GOTHAM_LS_LIGHT from "fonts/GOTHAM_LS_LIGHT";
import { useEffect, useState } from "react";

type CustomProjectsTypes = projectType | "ALL";

type Props = {
  projects: ProjectWithTechnologies[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<ProjectWithTechnologies[]>>;
};

function Filter({ projects, setFilteredProjects }: Props) {
  const [value, setValue] = useState<CustomProjectsTypes>("FULL_STACK");

  // make the initial projects be filtered by "FULL_STACK"
  useEffect(() => {
    setFilteredProjects(projects.filter((project) => project.type === "FULL_STACK"));
  }, []);

  const handleSelectedFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value as CustomProjectsTypes;
    setValue(value);
    if (value === "ALL") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.type === value);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="filter-container">
      <span className={GOTHAM_MEDIUM.className}>Filter by:</span>
      <div className={"filter-options"}>
        <button
          value="FULL_STACK"
          onClick={handleSelectedFilter}
          className={`filter-option  ${GOTHAM_LS_LIGHT.className} ${
            value === "FULL_STACK" ? "selected-value" : ""
          }`}
        >
          Full stack
        </button>
        <button
          value="LANDING_PAGE"
          onClick={handleSelectedFilter}
          className={`filter-option  ${GOTHAM_LS_LIGHT.className} ${
            value === "LANDING_PAGE" ? "selected-value" : ""
          }`}
        >
          Landing page
        </button>
        <button
          value="ALL"
          onClick={handleSelectedFilter}
          className={`filter-option  ${GOTHAM_LS_LIGHT.className} ${
            value === "ALL" ? "selected-value" : ""
          }`}
        >
          Web Application
        </button>
      </div>
    </div>
    // An autocomplete input with a select dropdown with all the options that filters on the fly
    // <Autocomplete
    //   freeSolo
    //   disableClearable
    //   className="search-projects-input"
    //   options={projects.map((project) => project.title)}
    //   renderInput={(params) => (
    //     <TextField
    //       {...params}
    //       label="Search projects"
    //       InputProps={{
    //         ...params.InputProps,
    //         type: "search",
    //       }}
    //     />
    //   )}
    //   onChange={(event, value) => {
    //     const val = value as string;
    //     setSearch(val);
    //     setFilteredProjects(
    //       projects.filter((project) => (val ? project.title === val : true))
    //     );
    //   }}
    //   value={search}
    // />
  );
}

export default Filter;
