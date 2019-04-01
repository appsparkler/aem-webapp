const { readdirSync: readDir, lstatSync: get_folderItemStats, copySync: copy, moveSync: move, removeSync: deleteFile } = require('fs-extra');
const { resolve: resolvePath, join: joinPath } = require('path');
const { sync: get_glob } = require('glob');
const get_directories = folderPath => readDir(folderPath).filter(folderItem => get_folderItemStats(resolvePath(folderPath, folderItem)).isDirectory());

process_chunkVendors(resolvePath('dist/chunk-vendors'));
process_chunkVendors(resolvePath('dist/chunk-common'));

process_chunkVendors(resolvePath('dist/templates/global/BasePage/BasePage-publish-libs'));
process_chunkVendors(resolvePath('dist/templates/landing/HomePage/HomePage-publish-libs'));
//
// process_chunkCommons();
// process_templates();

function process_chunkVendors(pathToDir) {
    const files = [
        'js.txt',
        'css.txt',
        '.content.xml'
    ];
    const dirs = get_directories(pathToDir);
    //
    dirs.forEach(copyFiles_toDir.bind(null, files, pathToDir));
    dirs.forEach(renameFiles_inDir.bind(null, pathToDir));
    files.forEach(deleteFiles_fromDir.bind(null, pathToDir))
}

function deleteFiles_fromDir(pathToDir, fileName) {
    const filePath = joinPath(pathToDir, fileName);
    deleteFile(filePath);
}

function rename_files(type, pathToDir, dir, jsFile) {
    if(type === 'js') move(resolvePath(jsFile), resolvePath(pathToDir, dir, type, 'script.js'))
    if(type === 'css') move(resolvePath(jsFile), resolvePath(pathToDir, dir, type, 'style.css'))
}

function renameFiles_inDir(pathToDir, dir) {
    const jsFiles = get_glob(joinPath(pathToDir, dir, '**/*.js'));
    const cssFiles = get_glob(joinPath(pathToDir, dir, '**/*.css'));
    jsFiles.forEach(rename_files.bind(null, 'js', pathToDir, dir))
    cssFiles.forEach(rename_files.bind(null, 'css', pathToDir, dir))
}

function copyFiles_toDir(files, pathToDir, dir) {
    files.forEach(file => copy(joinPath(pathToDir, file), joinPath(pathToDir, dir, file)));
}

function process_chunkCommons() {

}

function process_templates() {

}
