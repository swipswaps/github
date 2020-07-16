/*jshint esversion: 6 */

/**
 * Nextcloud - github
 *
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
 * @copyright Julien Veyssier 2020
 */

import Vue from 'vue'
import './bootstrap'
import Dashboard from './views/Dashboard'

document.addEventListener('DOMContentLoaded', function() {

	OCA.Dashboard.register('github', (el) => {
		const View = Vue.extend(Dashboard)
		new View({
			propsData: {},
		}).$mount(el)
	})

})