// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

use std::hash::Hash;
use std::collections::HashSet;

#[derive(Debug, Copy, Clone)]
pub struct UnorderedSetEq<'a, T: 'a>(pub &'a [T]);

impl<'a, T> PartialEq for UnorderedSetEq<'a, T>
where
    T: Eq + Hash,
{
    fn eq(&self, other: &Self) -> bool {
        let a: HashSet<_> = self.0.iter().collect();
        let b: HashSet<_> = other.0.iter().collect();

        a == b
    }
}
