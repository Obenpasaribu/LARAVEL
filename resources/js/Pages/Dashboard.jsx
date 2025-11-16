import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Dashboard() {
  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Modul Praktikum
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900">
              E. Aktivitas Praktikum
            </h2>
          </div>
          <span className="hidden rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white sm:inline-flex">
            PABWE – Laravel Inertia
          </span>
        </div>
      }
    >
      <Head title="Dashboard" />

      <div className="py-8">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* Hero / intro */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 p-6 shadow-lg sm:p-8">
            <div className="space-y-3 text-white">
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                Praktikum 5.1
              </span>
              <h1 className="text-2xl font-semibold sm:text-3xl">
                5.1 Fitur Todos – Laravel Inertia
              </h1>
              <p className="max-w-3xl text-sm text-blue-50 sm:text-base">
                Pada tahap <span className="font-semibold">4.1</span> kamu telah mengimplementasikan
                fitur Autentikasi menggunakan Laravel Inertia. Selanjutnya lengkapilah fitur todos
                untuk dapat menambahkan aktivitas yang akan dilakukan oleh pengguna ke depannya.
              </p>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Kebutuhan utama & lanjutan */}
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-50">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Kebutuhan Utama
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Fitur minimal yang wajib berfungsi dengan baik.
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
                    Wajib
                  </span>
                </div>

                <ol className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-blue-600 text-center text-xs font-semibold text-white">
                      1
                    </span>
                    <span>Tambah Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-blue-600 text-center text-xs font-semibold text-white">
                      2
                    </span>
                    <span>Ubah Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-blue-600 text-center text-xs font-semibold text-white">
                      3
                    </span>
                    <span>Hapus Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-blue-600 text-center text-xs font-semibold text-white">
                      4
                    </span>
                    <span>Mengubah Cover</span>
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-50">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Kebutuhan Lanjutan
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Untuk nilai dan pengalaman pengembangan yang lebih baik.
                    </p>
                  </div>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
                    Plus
                  </span>
                </div>

                <ol className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>Pencarian dan Filter Data</li>
                  <li>Pagination maksimal 20 data per halaman</li>
                  <li>
                    Alert tindakan menggunakan{' '}
                    <a
                      href="https://sweetalert2.github.io/"
                      className="font-medium text-blue-600 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SweetAlert2
                    </a>
                    .
                  </li>
                  <li>
                    Statistik data menggunakan{' '}
                    <a
                      href="https://apexcharts.com/"
                      className="font-medium text-blue-600 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://apexcharts.com/
                    </a>
                    .
                  </li>
                  <li className="mt-3 rounded-xl border border-yellow-200 bg-yellow-50 p-3 text-sm">
                    <span className="font-semibold text-yellow-900">
                      Pengisian data catatan <u>WAJIB</u> menggunakan
                    </span>{' '}
                    <a
                      href="https://trix-editor.org/"
                      className="font-semibold text-blue-700 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://trix-editor.org/
                    </a>
                    .
                  </li>
                </ol>
              </div>
            </div>

            {/* Artefak card */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-50">
                <h2 className="text-base font-semibold text-slate-900">
                  5.2 Artefak Dikumpulkan
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Pastikan seluruh artefak berikut sudah siap sebelum pengumpulan.
                </p>

                <ol className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-blue-600 text-center text-xs font-semibold text-white">
                      1
                    </span>
                    <span>Repository Github</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-blue-600 text-center text-xs font-semibold text-white">
                      2
                    </span>
                    <span>URL hasil deploy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-blue-600 text-center text-xs font-semibold text-white">
                      3
                    </span>
                    <span>Video presentasi (untuk yang tidak bisa deploy)</span>
                  </li>
                </ol>
              </div>

              <p className="text-xs text-slate-400">
                © 2025 Delcom Labs. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
