"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Package,
  FileText,
  ArrowRight,
  Users,
  Eye,
  TrendingUp,
  Plus,
  ShoppingCart,
} from "lucide-react";

const AdminDashboard = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const stats = [
    {
      label: "Total Products",
      value: "24",
      icon: Package,
      trend: "+12.5%",
    },
    {
      label: "Blog Posts",
      value: "12",
      icon: FileText,
      trend: "+8.2%",
    },
    {
      label: "Site Visitors",
      value: "1,284",
      icon: Users,
      trend: "+24.1%",
    },
  ];

  const activities = [
    {
      id: 1,
      icon: Plus,
      iconColor: "text-indigo-500",
      iconBg: "bg-indigo-50",
      dotColor: "bg-emerald-400",
      label: "New Product Added",
      highlight: "Premium Silk Route",
      subtext: "added to inventory",
      time: "2h ago",
    },
    {
      id: 2,
      icon: ShoppingCart,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50",
      dotColor: "bg-amber-400",
      label: "Order Fulfilled",
      highlight: "#ORD-8821",
      subtext: "shipped to customer",
      time: "5h ago",
    },
    {
      id: 3,
      icon: Users,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-50",
      dotColor: "bg-indigo-400",
      label: "New Member Joined",
      highlight: "Aisha Malik",
      subtext: "joined the workspace",
      time: "1d ago",
    },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Header with Glassmorphic Background */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-600 to-primary-800 p-6 shadow-lg">
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Dashboard Overview
            </h1>
            <p className="text-primary-100 text-base font-medium">
              Welcome back, Admin. Your store's performance is up 12% today.
            </p>
          </div>
          <Link
            href="/admin/products"
            className="group flex items-center justify-center gap-2 px-5 py-3 bg-white text-primary-700 hover:bg-primary-50 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-black/10 hover:-translate-y-1 shrink-0"
          >
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
            Add New Product
          </Link>
        </div>
      </div>

      {/* Modern Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden bg-linear-to-br from-primary-600 to-primary-800 border border-white/10 p-6 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all duration-500" />

            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-2xl bg-white/20 border border-white/30 ring-1 ring-white/5">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-end">
                <span className="flex items-center gap-1 text-xs font-bold text-white/90 bg-primary-100/20 px-3 py-1.5 rounded-full border border-white/50">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {stat.trend}
                </span>
                <p className="text-[12px] text-primary-50 font-bold uppercase tracking-widest mt-2 opacity-70">
                  vs last month
                </p>
              </div>
            </div>

            <div className="relative">
              <p className="text-primary-50 font-medium text-sm mb-1">
                {stat.label}
              </p>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
        {/* Quick Actions */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              Quick Actions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {[
              {
                title: "Products",
                desc: "Manage inventory & pricing",
                icon: Package,
                href: "/admin/products",
              },
              {
                title: "Blog Content",
                desc: "Publish news & articles",
                icon: FileText,
                href: "/admin/blog",
              },
            ].map((action) => (
              <Link
                key={action.title}
                href={action.href}
                className="group relative flex items-center justify-between bg-white border border-gray-200 p-4 rounded-2xl hover:border-primary-400 shadow-sm shadow-gray/10 hover:shadow-gray/20 hover:shadow-lg transition-all duration-500 overflow-hidden"
              >
                <div className="relative flex items-center gap-5">
                  <div className="p-3 bg-primary-50 rounded-xl border border-primary-600 group-hover:bg-primary-950 group-hover:border-primary-600 transition-all duration-500">
                    <action.icon className="w-6 h-6 text-primary-700 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-500">
                      {action.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">
                      {action.desc}
                    </p>
                  </div>
                </div>

                <div className="relative h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary-700 group-hover:border-primary-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-500">
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Elevated Recent Activity */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              Recent Activity
            </h2>
            <button className="text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 transition-all duration-300 px-4 py-1.5 rounded-xl border border-primary-100">
              View Analytics
            </button>
          </div>

          {/* Card */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm shadow-gray/10 overflow-hidden">
            {activities.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hovered === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={[
                    "flex items-center gap-5 px-6 py-5 cursor-pointer transition-all duration-300",
                    isHovered ? "bg-primary-50/50" : "bg-white",
                    index !== activities.length - 1
                      ? "border-b border-gray-50"
                      : "",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500",
                      isHovered
                        ? "bg-primary-700 shadow-lg -translate-y-0.5"
                        : "bg-primary-50 border border-primary-600",
                    ].join(" ")}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-500 ${isHovered ? "text-white" : "text-primary-700"}`}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-md font-bold leading-snug transition-colors duration-300 ${isHovered ? "text-primary-900" : "text-gray-900"}`}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-500 font-medium truncate">
                      <span className="font-bold text-primary-700">
                        {item.highlight}
                      </span>{" "}
                      {item.subtext}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span
                      className={`text-xs font-bold text-primary-700 bg-primary-50/80 px-3 py-1.5 rounded-lg whitespace-nowrap ${isHovered ? "bg-primary-600/20 text-primary-950" : ""} transition-all duration-300`}
                    >
                      {item.time}
                    </span>

                    <div className="relative w-8 h-8">
                      <button
                        className={[
                          "absolute inset-0 flex items-center justify-center rounded-xl bg-primary-950 text-white shadow-lg transition-all duration-500",
                          isHovered
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-75 pointer-events-none",
                        ].join(" ")}
                        aria-label="View details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <button className="w-full flex items-center justify-center gap-2 py-4 border-t border-gray-50 text-[12px] font-bold uppercase tracking-widest text-primary-800 hover:bg-primary-200/20 transition-all duration-300 group">
              View All Activity
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
