import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import blue from '@material-ui/core/colors/blue';

/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START datastore_build_service]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/google-cloud-node/#/docs/datastore/latest/guides/authentication
/*

const Datastore = require('@google-cloud/datastore');

// Creates a client
const datastore = new Datastore({});
// [END datastore_build_service]

/*
Installation and setup instructions.
1. Download the TaskList sample application from [here]
(https://github.com/GoogleCloudPlatform/nodejs-docs-samples/archive/master.zip).
2. Unzip the download:
```sh
unzip nodejs-docs-samples-master.zip
```
3. Change directories to the TaskList application:
```sh
cd nodejs-docs-samples-master/datastore
```
4. Install the dependencies and link the application:
```sh
npm install
```
5. With the gcloud SDK, be sure you are authenticated:
```sh
gcloud beta auth application-default login
```
6. At a command prompt, run the following, where `<project-id>` is the ID of
your Google Cloud Platform project.
```sh
export GCLOUD_PROJECT=<project-id>
```
7. Run the application!
```sh
node tasks <command>
```
*/
/*
// [START datastore_add_entity]
function addTask(description) {
    const taskKey = datastore.key('Task');
    const entity = {
        key: taskKey,
        data: [
            {
                name: 'created',
                value: new Date().toJSON(),
            },
            {
                name: 'description',
                value: description,
                excludeFromIndexes: true,
            },
            {
                name: 'done',
                value: false,
            },
        ],
    };

    datastore
        .save(entity)
        .then(() => {
            console.log(`Task ${taskKey.id} created successfully.`);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}
// [END datastore_add_entity]

// [START datastore_update_entity]
function markDone(taskId) {
    const transaction = datastore.transaction();
    const taskKey = datastore.key(['Task', taskId]);

    transaction
        .run()
        .then(() => transaction.get(taskKey))
        .then(results => {
            const task = results[0];
            task.done = true;
            transaction.save({
                key: taskKey,
                data: task,
            });
            return transaction.commit();
        })
        .then(() => {
            // The transaction completed successfully.
            console.log(`Task ${taskId} updated successfully.`);
        })
        .catch(() => transaction.rollback());
}
// [END datastore_update_entity]

// [START datastore_retrieve_entities]
function listTasks() {
    const query = datastore.createQuery('Task').order('created');

    datastore
        .runQuery(query)
        .then(results => {
            const tasks = results[0];

            console.log('Tasks:');
            tasks.forEach(task => {
                const taskKey = task[datastore.KEY];
                console.log(taskKey.id, task);
            });
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}
// [END datastore_retrieve_entities]

// [START datastore_delete_entity]
function deleteTask(taskId) {
    const taskKey = datastore.key(['Task', taskId]);

    datastore
        .delete(taskKey)
        .then(() => {
            console.log(`Task ${taskId} deleted successfully.`);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}
// [END datastore_delete_entity]

require(`yargs`) // eslint-disable-line
    .command(
        `new <description>`,
        `Adds a task with a description <description>.`,
        {},
        opts => addTask(opts.description)
    )
    .command(`done <taskId>`, `Marks the specified task as done.`, {}, opts =>
        markDone(opts.taskId)
    )
    .command(`list`, `Lists all tasks ordered by creation time.`, {}, listTasks)
    .command(`delete <taskId>`, `Deletes a task.`, {}, opts =>
        deleteTask(opts.taskId)
    )
    .example(`node $0 new "Buy milk"`, `Adds a task with description "Buy milk".`)
    .example(`node $0 done 12345`, `Marks task 12345 as Done.`)
    .example(`node $0 list`, `Lists all tasks ordered by creation time`)
    .example(`node $0 delete 12345`, `Deletes task 12345.`)
    .wrap(120)
    .epilogue(`For more information, see https://cloud.google.com/datastore/docs`)
    .help().argv;
*/

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: blue,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(title, date, location, desc) {
    id += 1;
    return { id, title, date, location, desc };
}

const rows = [
    createData('First Anniversary Party', "8-19-19", 'Phoenix', 'Party'),
    createData('Music', "8-10-19", 'Tucson', 'Concert'),
    createData('Thanksgiving Sale', "11-19-19", 'Tempe', 'Sale'),
    createData('Spring Fair', "4-8-19", 'Mesa', 'Fair'),
    createData('Holiday Party', "12-17-19", 'Los Angeles', 'Party',)
];

const rows2 = [
    createData('Launch Party', "8-19-19", 'Phoenix', 'Party'),
    createData('A Musical', "8-10-19", 'Panama', 'Concert'),
    createData('Black Friday Sale', "11-19-18", 'Tempe', 'Sale'),
    createData('Spring Fair', "4-8-19", 'Mesa', 'Fair'),
    createData('Holiday Party', "12-17-19", 'Los Angeles', 'Party',)
];

function CustomizedTable(props) {
    const { classes } = props;

    return (
        <div>
        <Card className={classes.root}>

            <Table className={classes.table} color={"primary"}>
                <TableHead color={"primary"}>
                    <TableRow color={"primary"}>
                        <CustomTableCell>Upcoming Events</CustomTableCell>
                        <CustomTableCell>Date</CustomTableCell>
                        <CustomTableCell>Location</CustomTableCell>
                        <CustomTableCell>Description</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map(row => {
                        return (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell component="th" scope="row">
                                    {row.title}
                                </CustomTableCell>
                                <CustomTableCell>{row.date}</CustomTableCell>
                                <CustomTableCell>{row.location}</CustomTableCell>
                                <CustomTableCell>{row.desc}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Card>

        <Card className={classes.root} color>
            <Table className={classes.table}>
            <TableHead>
                <TableRow>
                <CustomTableCell>Past events</CustomTableCell>
                <CustomTableCell numeric>Date</CustomTableCell>
                <CustomTableCell>Location</CustomTableCell>
                <CustomTableCell>Description</CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => {
                    return (
                        <TableRow className={classes.row} key={row.id}>
                            <CustomTableCell component="th" scope="row">
                                {row.title}
                            </CustomTableCell>
                            <CustomTableCell numeric>{row.date}</CustomTableCell>
                            <CustomTableCell numeric>{row.location}</CustomTableCell>
                            <CustomTableCell numeric>{row.desc}</CustomTableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
            </Table>
            </Card>
        </div>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);