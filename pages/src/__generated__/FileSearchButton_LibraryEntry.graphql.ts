/**
 * @generated SignedSource<<84366488f159ba8843d2feff42807f57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FileSearchButton_LibraryEntry$data = {
  readonly nextEpisode: {
    readonly number: number | null | undefined;
  } | null | undefined;
  readonly nextProgram: {
    readonly channel: {
      readonly name: string;
    };
  } | null | undefined;
  readonly work: {
    readonly annictId: number;
    readonly title: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"useShouldDisableButton_LibraryEntry">;
  readonly " $fragmentType": "FileSearchButton_LibraryEntry";
};
export type FileSearchButton_LibraryEntry$key = {
  readonly " $data"?: FileSearchButton_LibraryEntry$data;
  readonly " $fragmentSpreads": FragmentRefs<"FileSearchButton_LibraryEntry">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FileSearchButton_LibraryEntry",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Work",
      "kind": "LinkedField",
      "name": "work",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "annictId",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Program",
      "kind": "LinkedField",
      "name": "nextProgram",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Channel",
          "kind": "LinkedField",
          "name": "channel",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "nextEpisode",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "number",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useShouldDisableButton_LibraryEntry"
    }
  ],
  "type": "LibraryEntry",
  "abstractKey": null
};

(node as any).hash = "61f16b1769257d82f5105be8bff2086a";

export default node;
