import { create } from 'zustand';
import { createJSONStorage, persist} from 'zustand/middleware';

type ProjectType = "CURTAIN" | "ROLLER BLIND" | "EYELET" | "SKYLIGHT" | ""

type Projects = {
  name: string,
  type: ProjectType[],
  price : number,

}

interface ProjectState {
    allProjects: Projects[];
    newProjects : Projects[];
    focusProjects: Projects[];
    addProject: (project: Projects) => void;
    removeProject: (projectName: string) => void;
}

export const useProjectStore = create<ProjectState>()(
    persist<ProjectState>(
        (set) => ({
            allProjects: [],
            newProjects: [],
            focusProjects: [],
            addProject:(project: Projects) => set(state => ({
                allProjects : [...state.allProjects, project]
            })),
            removeProject: (projectName: string) => set(state =>({
                allProjects : state.allProjects.filter(p => p.name !== projectName)
            }))
        }), {
            name: 'ProjectState',
            storage: createJSONStorage(() => localStorage)
        }
    )
)