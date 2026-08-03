import type { Project } from "../../types/project";
import type { Task } from "../../types/task.js";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "../../../assets/fonts/Yekan-normal.js"

export const generateReport = (projects: Project[], tasks: Task[]) => {
    const statusLabels = {
        active: "فعال",
        completed: "تکمیل‌شده"
    }


    const tableBody = projects.map(project => [
        tasks.filter(task => task.projectId === project.id).length,
        project.deadline ? new DateObject(project.deadline).convert(persian, persian_fa).format("YYYY/MM/DD") : "ندارد",
        statusLabels[project.status],
        project.date,
        project.description,
        project.title,
    ])

    const projectsCount = projects.length
    const activeProjectsCount = projects.filter(p => p.status === "active").length
    const completedProjectsCount = projects.filter(p => p.status === "completed").length

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.width;
    
    doc.setLanguage("fa")
    doc.setFont("Yekan")
    doc.setFontSize(12);
    
    doc.text(projects[0].title, 20, 70);
    doc.text(": گزارش پروژه‌های ۳۰ روز اخیر", pageWidth - 14, 20, { align: "right" });
    doc.text(`تاریخ ثبت گزارش: ${new Date().toLocaleDateString()}`, pageWidth - 14, 30, { align: "right" });

    doc.text(`تعداد کل پروژه‌ها: ${projectsCount}`, pageWidth - 14, 40, { align: "right" })
    doc.text(`تعداد پروژه‌های فعال: ${activeProjectsCount}`, pageWidth - 14, 48, { align: "right" })
    doc.text(`تعداد پروژه‌های تکمیل‌شده: ${completedProjectsCount}`, pageWidth - 14, 56, { align: "right" })
    

    autoTable(doc, {
        startY: 76,
        tableWidth: "auto",
        head: [
            [
                "تعداد تسک",
                "مهلت پایان",
                "وضعیت",
                "تاریخ ایجاد",
                "توضیحات",
                "عنوان",
            ]
        ],
        body: tableBody,
        styles: {
            font: "Yekan",
            halign: "right",
            cellPadding: 5,
            fontSize: 10,
            overflow: "linebreak",
            cellWidth: "wrap"
        },
        columnStyles: {
            0: {
                cellWidth: 30
            },
            1: {
                cellWidth: 20
            },
            2: {
                cellWidth: 30
            },
            3: {
                cellWidth: 25
            },
            4: {
                cellWidth: 45
            },
            5: {
                cellWidth: 30
            }
        },
        headStyles: {
            halign: "right",
            fontStyle: "normal",
            valign: "middle",
        },
        bodyStyles: {
            halign: "right",
        },
        theme: "grid",
    });

    doc.save("taskflow-report.pdf");

}