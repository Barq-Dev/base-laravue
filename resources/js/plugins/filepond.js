// Import Vue FilePond
import vueFilePond from 'vue-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond-plugin-get-file/dist/filepond-plugin-get-file.min.css';
import 'filepond-plugin-image-overlay/dist/filepond-plugin-image-overlay.min.css';

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginGetFile from 'filepond-plugin-get-file';
import FilePondPluginImageOverlay from 'filepond-plugin-image-overlay';

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginGetFile, FilePondPluginImageOverlay);

export {
    FilePond
};