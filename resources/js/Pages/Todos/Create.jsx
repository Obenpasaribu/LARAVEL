import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import TrixEditor from "@/Components/TrixEditor";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        note: "",
        is_done: false,
        cover: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("todos.store"), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                        Tambah Todo
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-900">
                        Buat Aktivitas Baru
                    </h2>
                </div>
            }
        >
            <Head title="Tambah Todo" />

            <div className="py-6">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <form
                        onSubmit={submit}
                        className="space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-50"
                    >
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Judul
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    placeholder="Contoh: Belajar Laravel Inertia"
                                    className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {errors.title && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Status
                                </label>
                                <label className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                                    <input
                                        type="checkbox"
                                        checked={data.is_done}
                                        onChange={(e) =>
                                            setData("is_done", e.target.checked)
                                        }
                                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    Tandai selesai
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Catatan (WAJIB pakai Trix Editor)
                            </label>
                            <div className="rounded-md border border-slate-200 bg-slate-50/40 p-2">
                                <TrixEditor
                                    inputName="note"
                                    value={data.note}
                                    onChange={(v) => setData("note", v)}
                                />
                            </div>
                            {errors.note && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.note}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Cover
                            </label>
                            <input
                                type="file"
                                onChange={(e) =>
                                    setData("cover", e.target.files[0])
                                }
                                className="w-full text-sm"
                            />
                            {errors.cover && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.cover}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <Link
                                href={route("todos.index")}
                                className="text-xs font-medium text-slate-500 hover:text-slate-700"
                            >
                                ← Kembali ke daftar
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center rounded-md bg-violet-900 px-5 py-2 text-xs font-medium text-white shadow-sm hover:bg-blue-500 disabled:opacity-70"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
