function menus(rootState) {
    return [
        { subheader: "Main", group_permissions: [] },
        { icon: "mdi-view-dashboard-outline", text: "Dashboard", route: "/" },

        // ===== //

        // Autocrud

        // #Autocrud#

        // { divider: true },
        // { subheader: "Settings", group_permissions: ["Admin"] },
        // {
        //     icon: "mdi-chart-box",
        //     text: "Reports",
        //     childs: [
        //         {
        //             icon: "mdi-account-group-outline",
        //             text: " Users",
        //             route: "/report/user",
        //             can: "users-view",
        //         },
        //     ],
        // },
        {
            icon: "mdi-database-outline",
            text: "Master Data",
            childs: [
                {
                    icon: "mdi-account-outline",
                    text: "Users",
                    route: "/users",
                    can: "users-view",
                },
            ],
        },
        {
            icon: "mdi-cogs",
            text: "Settings",
            childs: [
                {
                    icon: "mdi-shield-account-outline",
                    text: "Permissions",
                    route: "/roles",
                    role: "Admin",
                },
                {
                    icon: "mdi-bell-ring-outline",
                    text: "Notifications",
                    route: "/notifications",
                    can: "notification-view",
                    actions: {
                        chip: rootState.auth.notifications.unRead.length,
                    },
                },
                // {
                //     icon: "mdi-help-circle-outline",
                //     text: "Help",
                //     route: "/panduan",
                //     auth: true,
                // },
                // { icon: 'change_history', text: 'Activity Log', route: '/activity-log', can: 'activity-log-view' },
            ],
        },
    ];
}

export default menus;
