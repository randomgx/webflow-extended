import { Action, ActionPanel, Icon, LaunchType, List, launchCommand, open } from "@raycast/api";
import { Webflow } from "webflow-api";
import { draftCMSItem, publishCMSItem, publishSite } from "../webflow/client";

export default function CollectionItemListItem(props: { collectionId: string; item: Webflow.CollectionItem }) {
  const { collectionId, item } = props;

  const name = item.fieldData?.name ?? "Untitled Item";
  const id = item.id;

  return (
    <List.Item
      title={name}
      subtitle={id}
      icon={{ source: Icon.Cd }}
      actions={
        <ActionPanel title={name}>
          <Action
            title="Publish Item"
            icon={Icon.Upload}
            onAction={() => {
              publishCMSItem(collectionId, item.id);
            }}
          />
          <Action
            title="Draft Item"
            icon={Icon.Tray}
            onAction={() => {
              draftCMSItem(collectionId, item.id);
            }}
          />
        </ActionPanel>
      }
    />
  );
}
