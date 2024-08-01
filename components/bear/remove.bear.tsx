import { useBearsStore } from "@/store/bear.store";

const RemoveBear = () => {
    const removeAllBears = useBearsStore((state) => state.removeAllBears);

    return (
        <button
            onClick={removeAllBears}
            className="bg-black text-white px-4 py-2 rounded"
        >
            RemoveBear
        </button>
    );
};
export default RemoveBear;
