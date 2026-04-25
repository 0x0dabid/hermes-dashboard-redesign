interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-3xl font-semibold text-cyan-100">{title}</h1>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </header>
  )
}
