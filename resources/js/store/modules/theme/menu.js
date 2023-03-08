function menus(rootState) {
    return [
        { subheader: "Main", group_permissions: [] },
        { icon: "dashboard", text: "Dashboard", route: "/" },

        // ===== //

        // Autocrud

        // #Autocrud#

        { divider: true },
        { subheader: "Settings", group_permissions: ["Admin"] },
        {
            icon: "mdi-chart-box",
            text: "Reports",
            childs: [
                {
                    icon: "mdi-account-group-outline",
                    text: " Users",
                    route: "/report/user",
                    can: "users-view",
                },
            ],
        },
        {
            icon: "mdi-database",
            text: "Master Data",
            childs: [
                {
                    icon: "person",
                    text: "Users",
                    route: "/users",
                    can: "users-view",
                },
            ],
        },
        {
            icon: "mdi-cogs",
            text: "Others",
            childs: [
                {
                    icon: "admin_panel_settings",
                    text: "Roles & Permissions",
                    route: "/roles",
                    role: "Admin",
                },
                {
                    icon: "notifications_active",
                    text: "Notifications",
                    route: "/notifications",
                    can: "notification-view",
                    actions: {
                        chip: rootState.auth.notifications.unRead.length,
                    },
                },
                {
                    icon: "help",
                    text: "Help",
                    route: "/panduan",
                    auth: true,
                },
                // { icon: 'change_history', text: 'Activity Log', route: '/activity-log', can: 'activity-log-view' },
            ],
        },
    ];
}

export default menus;
