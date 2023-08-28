import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

function ProfilePage() {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
