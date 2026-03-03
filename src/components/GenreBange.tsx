

type GenreBadgeProps = {
    id:number;
name: string;
    active?: boolean;
    onSelect?: (id: number ) => void;
};

export const GenreBadge = ({
                               id,name,
                               active,
                               onSelect
                           }: GenreBadgeProps) => {

    return (
        <span
            onClick={() => onSelect?.(id)}
            className={`
        inline-flex justify-center items-center rounded-md px-2 py-1 text-xs font-medium cursor-pointer w-20 h-10
        ${active
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-200"}
      `}
        >
      {name}
    </span>
    );
};
