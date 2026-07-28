

const OverviewPage = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-5
        "
      >
        <p className="mb-2 text-sm text-[var(--color-text-secondary)]">
          تعداد تسک‌ها
        </p>

        <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">
          12
        </h2>
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-5
        "
      >
        <p className="mb-2 text-sm text-[var(--color-text-secondary)]">
          تسک‌های انجام‌شده
        </p>

        <h2 className="text-3xl font-bold text-[var(--color-success)]">
          3
        </h2>
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-5
        "
      >
        <p className="mb-2 text-sm text-[var(--color-text-secondary)]">
          وضعیت پروژه
        </p>

        <span
          className="
            inline-flex
            rounded-full
            bg-green-100
            px-3
            py-1
            text-sm
            font-medium
            text-green-700
          "
        >
          فعال
        </span>
      </div>
    </div>
  )
}

export default OverviewPage