import React from 'react';
import { matchRoutes } from 'react-router-config';
import intersection from 'lodash/intersection';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { getAuthority } from '@/utils/authority';
import Exception from '@/components/Exception';
import RenderAuthorized from '@/components/Authorized';

const Authorized = RenderAuthorized(getAuthority());

export default ({ children, route, location }) => {
  const routes = matchRoutes(route.routes, location.pathname);
  const authorities = [];
  routes.forEach(item => {
    if (Array.isArray(item.route.authority) && item.route.authority.length) {
      authorities.push(item.route.authority);
    } else if (typeof item.route.authority === 'string' && item.route.authority) {
      authorities.push([item.route.authority]);
    }
  });
  const noMatch = (
    <Exception
      type="403"
      desc={formatMessage({ id: 'app.exception.description.403' })}
      linkElement={Link}
      backText={formatMessage({ id: 'app.exception.back' })}
    />
  );
  return (
    <Authorized
      authority={authorities.length === 0 ? undefined : intersection(...authorities)}
      noMatch={noMatch}
    >
      {children}
    </Authorized>
  );
};
