import { useMotionValue, motion, animate } from "motion/react";
import { useEffect } from "react";
import GitHubLogo from '../assets/GitHubLogo';

function RepoCard({ name }: { name: string }) {
    const count = useMotionValue(0);

    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 })
        return () => controls.stop()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.01 }}
            className={"flex flex-col rounded-lg p-4 shadow-md bg-crust"}
        >
            <div className={"repo-header flex justify-between items-center gap-3"}>
                <GitHubLogo className={"fill-gray-300"} />
                <h1 className={"text-gray-300 text-nowrap"}>{name}</h1>
            </div>
        </motion.div>
    )
}

export default RepoCard;