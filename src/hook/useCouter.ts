import { ref, Ref } from "Vue";

interface couterReturn {
  count: Ref<number>;
  add(): void;
}
export default function name(initValue: number | void): couterReturn {
  const count = ref(initValue || 0);
  return {
    count,
    add() {
      count.value++;
    },
  };
}
