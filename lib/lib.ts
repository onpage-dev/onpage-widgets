export default {
    openEditModal(thing_id: number, schema_id: number, resource_id: number) {
        return this.openPopup(
            `https://app.onpage.it/#/things/edit/${thing_id}/${schema_id}/${resource_id}`,
            {
                width: "1200px",
            }
        );
    },

    openLink(url: string) {
        window.open(url, "_blank");
    },

    openPopup(
        url: string,
        style?: {
            width?: string;
        }
    ) {
        const parent = document.body;
        const div = document.createElement("div");
        div.setAttribute(
            "style",
            "z-index: 9999999; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,.2)"
        );
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.setAttribute(
            "sandbox",
            "allow-forms allow-same-origin allow-scripts"
        );
        iframe.setAttribute(
            "style",
            `border:1px solid #666; box-shadow: 0 0 10rem rgba(0,0,0,.2); border-radius: 10px; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; width: ${
                style?.width ?? 1000
            }; max-width: 80%; height: 95vh; background: white;  cursor:default`
        );

        div.onclick = (e: Event) => {
            e.stopPropagation;
            div.remove();
        };
        iframe.onclick = (e: Event) => e.stopPropagation;

        div.append(iframe);
        parent.append(div);
    },
};
