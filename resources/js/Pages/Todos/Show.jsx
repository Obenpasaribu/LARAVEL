import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'

export default function Show({ todo }) {
  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Detail Todo
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900">
              {todo.title}
            </h2>
          </div>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
              todo.is_done
                ? 'bg-blue-50 text-blue-700 ring-blue-100'
                : 'bg-slate-50 text-slate-700 ring-slate-200'
            }`}
          >
            {todo.is_done ? 'Selesai' : 'Belum selesai'}
          </span>
        </div>
      }
    >
      <Head title={`Detail - ${todo.title}`} />

      <div className="py-6">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-blue-50">
            {todo.cover && (
              <div className="h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={`/storage/${todo.cover}`}
                  alt={todo.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="space-y-5 p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-100">
                  Dibuat: {todo.created_at}
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-100">
                  Diubah: {todo.updated_at}
                </span>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  Catatan
                </h3>
                {todo.note ? (
                  <div
                    className="prose prose-sm max-w-none prose-headings:text-slate-900 prose-a:text-blue-600"
                    dangerouslySetInnerHTML={{ __html: todo.note }}
                  />
                ) : (
                  <p className="text-sm text-slate-400">
                    Belum ada catatan untuk todo ini.
                  </p>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 pt-4">
                <Link
                  href={route('todos.edit', todo.id)}
                  className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-blue-500"
                >
                  Edit Todo
                </Link>
                <Link
                  href={route('todos.index')}
                  className="inline-flex items-center rounded-md border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  Kembali ke daftar
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-start sm:hidden">
            <Link
              href={route('todos.index')}
              className="text-xs text-slate-500 hover:text-slate-700"
            >
              ← Kembali
            </Link>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
