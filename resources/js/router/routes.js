import registerModule from "./helpers/base";
import Report from "../views/report/Index";

const routes = [
    // Master Module Auto Register
    ...registerModule([
        // Autocrud
        // #Autocrud#
    ]),
    // registerModule("Pedoman Kerja", { can: null }),

    // Regular Route Register
    {
        path: "/report/:modul",
        name: "report",
        component: Report,
        meta: {
            breadcrumbs: [{ text: "Dashboard", to: "/" }, { text: "Report" }],
            can: "report-view",
        },
    },
];

export default routes;
