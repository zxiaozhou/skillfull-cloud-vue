import { defHttp } from '/@/utils/http/axios';
import { SysUrlPrefix } from '/@/api/sysPrefix';
import {
  ChangePasswordVo,
  ChangeUserInfoVo,
  FindPasswordVo,
  CheckOldUserPhoneVo,
  ChangeUserPhoneVo,
  BindUserPhoneVo,
} from './model/webLoginCenterModel';
import type { UserInfo } from '/#/store';
import type { AppRouteRecordRaw } from '/@/router/types';

/**
 * @description: 获取用户信息
 */
export const getUserInfo = () =>
  defHttp.get<UserInfo>({ url: SysUrlPrefix.AUTH + '/web/user-center/user-info' });

/**
 * @description: 获取用户路由菜单信息
 */
export const getRouterInfo = (systemCodes: string, orgId?: string) =>
  defHttp.get<AppRouteRecordRaw[]>({
    url: SysUrlPrefix.AUTH + '/web/user-center/menu-info/tree',
    params: { systemCodes, orgId },
  });

/**
 * @description: 修改密码
 */
export const changePassword = (params: ChangePasswordVo) =>
  defHttp.post<string>({ url: SysUrlPrefix.AUTH + '/web/user-center/change/password', params });

/**
 * @description: 修改用户信息
 */
export const changeUserInfo = (params: ChangeUserInfoVo) =>
  defHttp.post<string>({ url: SysUrlPrefix.AUTH + '/web/user-center/change/user-info', params });

/**
 * @description: 找回密码
 */
export const findPassword = (params: FindPasswordVo) =>
  defHttp.post<string>({ url: SysUrlPrefix.AUTH + '/web/user-center/find/password', params });

/**
 * @description: 修改手机号前验证旧手机验证码
 */
export const checkOldUserPhoneSms = (params: CheckOldUserPhoneVo) =>
  defHttp.post<string>({
    url: SysUrlPrefix.AUTH + '/web/user-center/check/old-phone-sms',
    params,
  });

/**
 * @description: 修改手机号
 */
export const changeUserPhone = (params: ChangeUserPhoneVo) =>
  defHttp.post<string>({ url: SysUrlPrefix.AUTH + '/web/user-center/change/user-phone', params });

/**
 * @description: 绑定手机号
 */
export const bindUserPhone = (params: BindUserPhoneVo) =>
  defHttp.post<string>({ url: SysUrlPrefix.AUTH + '/web/user-center/bind/user-phone', params });
