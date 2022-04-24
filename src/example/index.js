const vscode = require('vscode');
const utils = require('../vscode/vscode.utils');
const EGWebView = require('./e.g.webview');

const name = 'Example';
const webview = new EGWebView();

/**
 * @param {vscode.ExtensionContext} context
 */
const activate = (context) => {
    // example.webview
    webview.activate(context, name, 'example.webview');
    // example.helloWorld
    context.subscriptions.push(
        vscode.commands.registerCommand('example.helloWorld', function({scheme, _fsPath}) {
            if(vscode.workspace.workspaceFolders !== undefined) {
                let wf = vscode.workspace.workspaceFolders[0].uri.path ;
                let f = vscode.workspace.workspaceFolders[0].uri.fsPath ; 
            
                const message = `YOUR-EXTENSION: folder: ${wf} - ${f}` ;
            
                utils.Api.showMessage({ txt: message });
            } 
            else {
                const message = "YOUR-EXTENSION: Working folder not found, open a folder an try again" ;
            
                vscode.window.showErrorMessage(message);
            }
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('example.helloWorld', function() {
            utils.Api.showMessage({ txt: 'Hello World!' });
        })
    );
};

const deactivate = () => {
    webview.deactivate();
};

module.exports = {
    name,
    activate,
    deactivate
};