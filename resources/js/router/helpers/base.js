export default (model, options = {}) => {
    let result

    if (Array.isArray(model)) {

        result = []
        for (let index = 0; index < model.length; index++) {
            result.push({
                path: `/${_.kebabCase(model[index])}`,
                name: `${_.kebabCase(model[index])}`,
                component: () => import(`@/views/${_.snakeCase(model[index])}/Index.vue`),
                meta: {
                    breadcrumbs: [
                        { text: 'Dashboard', to: '/' },
                        { text: model[index] }
                    ],
                    can: `${_.kebabCase(model[index].toLowerCase())}-view`
                }
            });
        }

    } else {
        result = {
            path: `/${_.kebabCase(model)}`,
            name: `${_.kebabCase(model)}`,
            component: () => import(`@/views/${_.snakeCase(model)}/Index.vue`),
            meta: {
                breadcrumbs: [
                    { text: 'Dashboard', to: '/' },
                    { text: model }
                ],
                can: options.can === undefined ? `${model}-view` : options.can
            }
        }
    }

    return result
}