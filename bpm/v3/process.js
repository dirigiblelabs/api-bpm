/*
 * Copyright (c) 2018 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 */

var java = require('core/v3/java');

exports.getProcessEngine = function() {
	var engineInstance = java.call('org.eclipse.dirigible.api.v3.bpm.BpmFacade', 'getProcessEngine', [], true);
	var engine = new Engine();
	engine.uuid = engineInstance.uuid;
	return engine;
};

/**
 * Engine object
 */
function Engine() {
	
}

exports.start = function(key, parameters) {
	var processInstanceId = java.call('org.eclipse.dirigible.api.v3.bpm.BpmFacade', 'startProcess', [key, JSON.stringify(parameters)]);
	return processInstanceId;
};

exports.getVariable = function(processInstanceId, variableName) {
	var variableValue = java.call('org.eclipse.dirigible.api.v3.bpm.BpmFacade', 'getVariable', [processInstanceId, variableName]);
	return variableValue;
};

exports.setVariable = function(processInstanceId, variableName, variableValue) {
	java.call('org.eclipse.dirigible.api.v3.bpm.BpmFacade', 'setVariable', [processInstanceId, variableName, variableValue]);
};

exports.removeVariable = function(processInstanceId, variableName) {
	java.call('org.eclipse.dirigible.api.v3.bpm.BpmFacade', 'removeVariable', [processInstanceId, variableName]);
};
