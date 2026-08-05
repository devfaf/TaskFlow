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

    doc.setLanguage("fa")
    doc.setFont("Yekan")
    doc.setFontSize(14);
    doc.addImage("/logo/logo.png", "png", 10, 10, 40, 16)

    autoTable(doc, {
        startY: 30,
        body: [
            [`تعداد کل پروژه‌ها: ${projectsCount}`],
            [`تعداد پروژه‌های فعال: ${activeProjectsCount}`],
            [`تعداد پروژه‌های تکمیل‌شده: ${completedProjectsCount}`],
            [`تاریخ ثبت گزارش:  ${new DateObject(Date.now()).convert(persian, persian_fa).format("YYYY/MM/DD")}`]
        ],
        styles: {
            font: "Yekan",
            halign: "right",
            cellPadding: 3,
            fontSize: 16,
            overflow: "linebreak",
            cellWidth: "wrap"
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
    })

    autoTable(doc, {
        startY: 90,
        tableWidth: "auto",
        head: [
            [
                "تسک",
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
            cellPadding: 3,
            fontSize: 12,
            overflow: "linebreak",
            cellWidth: "wrap"
        },
        columnStyles: {
            0: {
                cellWidth: 20
            },
            1: {
                cellWidth: 30
            },
            2: {
                cellWidth: 30
            },
            3: {
                cellWidth: 30
            },
            4: {
                cellWidth: 50
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