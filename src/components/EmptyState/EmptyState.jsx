import styles from "./EmptyState.module.css"

export const EmptyState = ({ isSearching }) => {
    return (
        <>
            <div className={styles.container}>
                {isSearching ? (
                    <div className={styles.messageContainer}>
                        <p className={styles.icon}>🔍</p>
                        <p className={styles.message}>NEMHUM DESEJO ENCONTRADO</p>
                    </div>
                ) : (
                    <div className={styles.messageContainer}>
                        <p className={styles.icon}>📦</p>
                        <p className={styles.message}>SEM DESEJOS CADASTRADOS</p>
                    </div>
                )}
            </div>
        </>
    );
};