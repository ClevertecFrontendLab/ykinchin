import { useAppSelector } from './reduxHooks';

const usePrevLocation = () => {
    const prev = useAppSelector((state) => state.router.previousLocations);
    if (prev) {
        const path = prev[1]?.location?.pathname;
        return path;
    }
};

export default usePrevLocation;
