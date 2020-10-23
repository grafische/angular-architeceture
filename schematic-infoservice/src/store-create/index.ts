import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  SchematicsException,
  apply,
  url,
  template,
  move
} from "@angular-devkit/schematics";
import { strings, experimental, normalize } from "@angular-devkit/core";
import { dasherize } from "@angular-devkit/core/src/utils/strings";

interface AddFilesInterface {
  name: string;
  selector: string;
  path: string;
}

export function storeCreate(_options: AddFilesInterface): Rule {
  _options = {
    ..._options,
    ...{ selector: `app-${dasherize(_options.name)}`, style: "css" }
  };

  return (tree: Tree, _context: SchematicContext) => {
    return chain([addFiles(_options)])(tree, _context);
  };
}

function getWorkspace(_options: any, tree: Tree): experimental.workspace.WorkspaceSchema {
  const workspace = tree.read('/angular.json');

  if (!workspace) {
    throw new SchematicsException('angular.json file not found!');
  }

  return JSON.parse(workspace.toString());
}

function getProject(_options: any, workspace: any) {
  _options.project = (_options.project === 'defaultProject') ?
  workspace.defaultProject :
  _options.project;
  console.info("workspace.defaultProject _options.project - " + _options.project);

  return workspace.projects[_options.project];
}

function addFiles(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (!_options.name) {
      throw new SchematicsException("Entity name is required");
    }
    //const folderPath = normalize(strings.dasherize(_options.path + '/' + _options.name));
    const workspace = getWorkspace(_options, tree);
    const project = getProject(_options, workspace);
    console.info("project - " + project);
    const appRoot = `${project.root}/` + `${project.sourceRoot}/` + `${project.prefix}/`;
    const folderPath = normalize(strings.dasherize(appRoot + _options.path + '/' + _options.store));
    const path = `../src/app/store`;

    context.logger.debug(`adding files to ${path} ${tree} dir`);

    return apply(url("./files"), [
      template({
        ...strings,
        ..._options
      }),
      move(folderPath)
    ])(context);
  };
}
