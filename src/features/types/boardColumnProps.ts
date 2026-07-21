export type BoardColumnProps = {
    label:string;
    value:string;
}

export const BOARD_STATUS_OPTIONS = [
    {
        label:"انجام‌نشده",
        value:"todo"
    },
    {
        label:"در حال انجام",
        value:"inProgress"
    },
    {
        label:"بازبینی",
        value:"review"
    },
    {
        label:"انجام‌شده",
        value:"done"
    },
]
