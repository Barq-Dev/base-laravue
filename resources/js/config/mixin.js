import Vue from "vue";
import store from "@/store";

Vue.mixin({
    methods: {
        userCan(permission, like = false) {
            try {
                let user = store.state.auth.user;

                // KALAU ADMIN BOLEH SEMUA
                if (user.roles && user.roles[0].name == "admin") return true;
                //KALAU BOLEH MIRIP
                if (like)
                    if (
                        user.all_permissions.findIndex((element) =>
                            element.includes(permission)
                        ) > -1
                    )
                        return true;
                //KALAU DIBOLEHKAN
                if (
                    user &&
                    user.all_permissions &&
                    user.all_permissions.includes(permission)
                ) {
                    return true;
                }
                return false;
            } catch (error) {
                console.log(error);
            }
        },
        userRole(role = null, is = true) {
            try {
                let user = store.state.auth.user;

                if (user.roles[0].name == "admin") return true;

                if (role == "visitor" && !store.getters.isAuth) return true;

                if (Array.isArray(role)) {
                    return user.roles.some((row) => {
                        return role.includes(row.name);
                    });
                }
                // console.log(role, user.roles, user.roles.some(row => row.name.includes(role)))
                if (is && user.roles.some((row) => row.name.includes(role)))
                    return true;
                // if (!is && user.roles.some(row => row.name.includes(role))) return false;
                if (!is && user.roles[0].name != role) return true;
            } catch (error) {}
        },
    },
});
