/**
 * @generated SignedSource<<a3eec3a069de9c546be21c7979b6a553>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FileSearchButton_LibraryEntry$data = {
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "useShouldDisableButton_LibraryEntry"
    }
  ],
  "type": "LibraryEntry",
  "abstractKey": null
};

(node as any).hash = "24164d51fbb695ee314f126474ba030a";

export default node;
