import { create } from 'zustand';
import { createJSONStorage, persist} from 'zustand/middleware';

type TopicType = "CURTAIN" | "ROLLER BLIND" | "EYELET" | "SKYLIGHT" | ""

type Topics = {
  name: string,
  type: TopicType[],
  price : number,

}

interface TopicState {
    allTopics: Topics[];
    newTopics : Topics[];
    focusTopics: Topics[];
    addTopic: (topic: Topics) => void;
    removeTopic: (topicName: string) => void;
}

export const useCartStore = create<TopicState>()(
    persist<TopicState>(
        (set) => ({
            allTopics: [],
            newTopics: [],
            focusTopics: [],
            addTopic:(topic: Topics) => set(state => ({
                allTopics : [...state.allTopics, topic]
            })),
            removeTopic: (topicName: string) => set(state =>({
                allTopics : state.allTopics.filter(p => p.name !== topicName)
            }))
        }), {
            name: 'TopicState',
            storage: createJSONStorage(() => localStorage)
        }
    )
)