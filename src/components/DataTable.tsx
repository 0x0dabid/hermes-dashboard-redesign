import type { ReactNode } from 'react'

interface DataTableProps<T> {
  columns: Array<{ key: string; title: string; render: (row: T) => ReactNode }>
  rows: T[]
}

export function DataTable<T>({ columns, rows }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-3 py-2 text-left font-medium text-slate-400">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="rounded-lg bg-slate-950/50">
              {columns.map((column) => (
                <td key={column.key} className="px-3 py-3 text-slate-200">
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
