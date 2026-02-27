type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export const Pagination = ({
                               page,
                               totalPages,
                               onPageChange,
                           }: PaginationProps) => {

    const windowSize = 2;

    const start = Math.max(1, page - windowSize);
    const end = Math.min(totalPages, page + windowSize);

    const pages = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
    );

    return (
        <div style={{ display: "flex", gap: "8px" }}>

            {/* Prev */}
            <button
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                ←
            </button>

            {/* Pages */}
            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    style={{
                        fontWeight: p === page ? "bold" : "normal",
                        backgroundColor: p === page ? "#ddd" : "transparent"
                    }}
                >
                    {p}
                </button>
            ))}

            {/* Next */}
            <button
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                →
            </button>

        </div>
    );
};
