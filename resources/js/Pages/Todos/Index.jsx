// resources/js/Pages/Todos/Index.jsx
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import Chart from "react-apexcharts";

export default function Index({
    todos,
    filters,
    stats = { done: 0, pending: 0 },
    flash,
}) {
    useEffect(() => {
        if (flash?.success) {
            Swal.fire("Berhasil", flash.success, "success");
        }
    }, [flash]);

    const onSearch = (e) => {
        e.preventDefault();
        router.get(
            route("todos.index"),
            {
                q: e.target.q.value,
                status: e.target.status.value,
            },
            { preserveState: true }
        );
    };

    const getNumber = (index) => {
        if (typeof todos.from !== "undefined" && todos.from !== null) {
            return todos.from + index;
        }

        const current = todos.current_page || 1;
        const perPage = todos.per_page || todos.data.length || 1;
        return (current - 1) * perPage + (index + 1);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600">
                            Modul Todos
                        </p>
                        <h2 className="mt-1 text-xl font-semibold text-slate-900">
                            Manajemen Aktivitas
                        </h2>
                    </div>
                    <Link
                        href={route("todos.create")}
                        className="hidden items-center rounded-full bg-violet-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-violet-500 sm:inline-flex"
                    >
                        + Tambah Todo
                    </Link>
                </div>
            }
        >
            <Head title="Todos" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
                    {/* FILTER TOOLBAR */}
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-violet-50">
                        <form
                            onSubmit={onSearch}
                            className="flex flex-col gap-3 md:flex-row md:items-center"
                        >
                            <div className="flex-1">
                                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Pencarian
                                </label>
                                <input
                                    name="q"
                                    defaultValue={filters?.q || ""}
                                    placeholder="Cari judul todo..."
                                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                                />
                            </div>

                            <div className="w-full md:w-48">
                                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    defaultValue={filters?.status || ""}
                                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                                >
                                    <option value="">Semua status</option>
                                    <option value="done">Selesai</option>
                                    <option value="pending">Belum</option>
                                </select>
                            </div>

                            <div className="flex w-full items-end gap-2 md:w-auto md:justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex flex-1 items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-violet-500 md:flex-none"
                                >
                                    Terapkan
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        router.get(
                                            route("todos.index"),
                                            {},
                                            { preserveState: true }
                                        )
                                    }
                                    className="inline-flex flex-1 items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 md:flex-none"
                                >
                                    Reset
                                </button>

                                <Link
                                    href={route("todos.create")}
                                    className="inline-flex flex-1 items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-violet-500 md:hidden"
                                >
                                    + Todo
                                </Link>
                            </div>
                        </form>
                    </div>

                    {/* GRID */}
                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* LIST TODOS */}
                        <div className="space-y-3 lg:col-span-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">
                                        Daftar Todo
                                    </h3>
                                    <p className="text-xs text-slate-500">
                                        {todos.total} total todo, tampil{" "}
                                        {todos.data.length} pada halaman ini.
                                    </p>
                                </div>
                            </div>

                            {/* kosong */}
                            {todos.data.length === 0 && (
                                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-6 text-center text-sm text-slate-400">
                                    Belum ada todo yang sesuai filter.
                                </div>
                            )}

                            {/* LOOP */}
                            {todos.data.map((todo, index) => (
                                <div
                                    key={todo.id}
                                    className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-violet-50 sm:flex-row sm:items-stretch"
                                >
                                    {/* kiri */}
                                    <div className="flex flex-1 flex-col gap-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-50 text-xs font-semibold text-violet-700">
                                                    {getNumber(index)}
                                                </span>
                                                <Link
                                                    href={route(
                                                        "todos.show",
                                                        todo.id
                                                    )}
                                                    className="text-sm font-semibold text-slate-900 hover:text-violet-600 hover:underline"
                                                >
                                                    {todo.title}
                                                </Link>
                                            </div>

                                            <span
                                                className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${
                                                    todo.is_done
                                                        ? "bg-violet-50 text-violet-700"
                                                        : "bg-slate-50 text-slate-600"
                                                }`}
                                            >
                                                {todo.is_done
                                                    ? "Selesai"
                                                    : "Belum"}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                                            <span>
                                                Dibuat: {todo.created_at}
                                            </span>
                                            <span>•</span>
                                            <span>ID: {todo.id}</span>
                                        </div>
                                    </div>

                                    {/* kanan */}
                                    <div className="flex shrink-0 items-center justify-between gap-3 sm:flex-col sm:items-end sm:justify-between">
                                        <div className="flex items-center gap-2">
                                            {todo.cover ? (
                                                <img
                                                    src={`/storage/${todo.cover}`}
                                                    alt=""
                                                    className="h-12 w-12 rounded-lg border border-slate-100 object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-dashed border-slate-200 text-[10px] text-slate-400">
                                                    Tanpa
                                                    <br />
                                                    cover
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-2 text-[11px]">
                                            <Link
                                                href={route(
                                                    "todos.edit",
                                                    todo.id
                                                )}
                                                className="rounded-full border border-violet-100 px-3 py-1 font-medium text-violet-600 hover:bg-violet-50"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Hapus?",
                                                        text: "Yakin hapus todo ini?",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonText:
                                                            "Ya, hapus",
                                                        cancelButtonText:
                                                            "Batal",
                                                    }).then((res) => {
                                                        if (res.isConfirmed) {
                                                            router.delete(
                                                                route(
                                                                    "todos.destroy",
                                                                    todo.id
                                                                ),
                                                                {
                                                                    preserveScroll: true,
                                                                }
                                                            );
                                                        }
                                                    });
                                                }}
                                                className="rounded-full border border-fuchsia-100 px-3 py-1 font-medium text-fuchsia-600 hover:bg-fuchsia-50"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* pagination */}
                            {todos.data.length > 0 && (
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                                    <p>
                                        Halaman {todos.current_page} dari{" "}
                                        {todos.last_page}
                                    </p>
                                    <div className="flex gap-1">
                                        {todos.links.map((link, idx) => (
                                            <button
                                                key={`${link.label}-${idx}`}
                                                onClick={() =>
                                                    link.url &&
                                                    router.get(
                                                        link.url,
                                                        {},
                                                        { preserveState: true }
                                                    )
                                                }
                                                className={`min-w-[32px] rounded-md px-2 py-1 text-xs font-medium ${
                                                    link.active
                                                        ? "bg-violet-600 text-white"
                                                        : link.url
                                                        ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                                        : "bg-transparent text-slate-400"
                                                }`}
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* STATISTIK */}
                        <div className="space-y-3">
                            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-violet-50">
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Statistik Todos
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Jumlah todo yang selesai dan belum selesai.
                                </p>

                                <div className="mt-3">
                                    <Chart
                                        type="bar"
                                        height={260}
                                        series={[
                                            {
                                                name: "Jumlah Todos",
                                                data: [
                                                    stats.done,
                                                    stats.pending,
                                                ],
                                            },
                                        ]}
                                        options={{
                                            chart: {
                                                stacked: false,
                                                toolbar: { show: false },
                                            },
                                            plotOptions: {
                                                bar: {
                                                    borderRadius: 6,
                                                    columnWidth: "40%",
                                                },
                                            },
                                            dataLabels: {
                                                enabled: true,
                                            },
                                            xaxis: {
                                                categories: [
                                                    "Selesai",
                                                    "Belum",
                                                ],
                                                labels: {
                                                    style: { fontSize: "12px" },
                                                },
                                            },
                                            yaxis: {
                                                labels: {
                                                    style: { fontSize: "12px" },
                                                },
                                                allowDecimals: false,
                                            },
                                            colors: ["#7C3AED"], // Violet strong
                                            grid: {
                                                borderColor: "#e5e7eb",
                                            },
                                            legend: { show: false },
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="rounded-2xl bg-violet-50 p-4 text-sm text-violet-900 ring-1 ring-violet-100">
                                <p className="text-xs font-semibold uppercase tracking-wide">
                                    Ringkasan
                                </p>
                                <p className="mt-1 text-2xl font-semibold">
                                    {stats.done + stats.pending}
                                </p>
                                <p className="text-xs text-violet-900">
                                    Total Todos
                                </p>

                                <div className="mt-3 space-y-1 text-xs">
                                    <p>
                                        Selesai:{" "}
                                        <span className="font-semibold">
                                            {stats.done}
                                        </span>
                                    </p>
                                    <p>
                                        Pending:{" "}
                                        <span className="font-semibold">
                                            {stats.pending}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END GRID */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
