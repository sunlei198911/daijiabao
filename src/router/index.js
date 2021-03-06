/**
 * @file 路由文件
 *
 * @author zxq
 * @date 2021-02-11
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/pages/',
    routes: [
        {
            path: '/',
            component: () => import('@/pages/login')
        },
        // 登录
        {
            path: '/login',
            component: () => import('@/pages/login')
        },
        // 客户档案
        {
            path: '/companies',
            component: () => import('@/pages/companies/index')
        },
        // 信息上传
        {
            path: '/upload-info-list',
            component: () => import('@/pages/uploadInfo/index')
        },
        // 信息上传 上传资料页
        {
            path: '/upload-info/upload-info-page',
            component: () => import('@/pages/uploadInfo/uploadInfoPage')
        },
        // 信息上传 查看资料页
        {
            path: '/upload-info/view-info-page',
            component: () => import('@/pages/uploadInfo/viewInfoPage')
        },
        // 智能做账
        {
            path: '/smart-bill',
            component: () => import('@/pages/smartBill/index')
        },
        // 一键报税
        {
            path: '/one-key-bill',
            component: () => import('@/pages/oneKeyBill/index')
        },
        // 历史记录
        {
            path: '/history',
            component: () => import('@/pages/history')
        },
        // 页面未找到
        {
            path: '/page-404',
            component: () => import('@/pages/page-404')
        }
    ]
});
