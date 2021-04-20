import { List } from 'immutable';
import moment from 'moment-timezone';
import { Episode, ShowTopCalendarTypeList, ShowWorkingDay, Show } from 'modules/Show/show.types';
import createSelector from 'utils/reselect';
import { dummyEmailTempalte } from 'store/sagas/show';

const showStateData = (state: any) => {
  const { shows } = state;
  return shows || {};
};

export const isLoading = createSelector(showStateData, (shows) => shows.get('loading') || '');

export const getShowLists = createSelector(showStateData, (shows) => shows.get('list') || List());

export const getShowsForDropDwon = createSelector(showStateData, (shows) => {
  const list = shows.get('list') || [];
  return list.map((show: Show) => ({ label: show.title, value: show.id }));
});

export const getSelectedShowId = createSelector(showStateData, (shows) => shows.get('selectedShowId') || null);

export const getSelectedShow = createSelector(showStateData, (shows) => shows.get('selectedShow') || {});

export const getShowForEdit = createSelector(showStateData, (shows) => shows.get('showEdit'));

export const getShowDetail = createSelector(showStateData, (shows) => shows.get('showDetailView'));

export const showCreateLoading = createSelector(showStateData, (shows) => shows.getIn(['newShow', 'loading']));

export const getShowJob = createSelector(showStateData, (shows) => shows.get('selectedJob'));

export const getSelectedShowDate = createSelector(showStateData, (shows) => shows.get('selectedDate'));

export const getShowJobList = createSelector(showStateData, (shows) => shows.get('dayJobList') || List());

export const getShowCalendarDates = createSelector(showStateData, (shows) => {
  const date = moment();
  const arr: ShowTopCalendarTypeList = [];
  for (let i = 1; i < 31; i += 1) {
    arr.push({
      id: i.toString(),
      date: date.format('YYYY-MM-DD'),
      title: '',
      dayTitle: date.format('MMM DD'),
    });
    date.add(1, 'days');
  }

  const selectedShow = shows.get('selectedShow') || null;
  if (selectedShow) {
    selectedShow?.episodes?.map((e: Episode) =>
      e.episodeDays.map((d: ShowWorkingDay) => {
        const pos = arr.findIndex((x) => x.date === d.date);
        const title = pos !== -1 ? (arr[pos].title = d.title || '') : '';
        return title;
      }),
    );
  }

  return arr;
});

export const getPerformerSearchResult = createSelector(
  showStateData,
  (shows) => shows.getIn(['performerResult', 'data']) || [],
);

export const performerSearchLoading = createSelector(
  showStateData,
  (shows) => shows.getIn(['performerResult', 'loading']) || false,
);

export const getEmailTemplates = createSelector(showStateData, () => dummyEmailTempalte) || [];
